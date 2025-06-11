<?php

namespace WPML\Core;

use \WPML\Core\Twig\Environment;
use \WPML\Core\Twig\Error\LoaderError;
use \WPML\Core\Twig\Error\RuntimeError;
use \WPML\Core\Twig\Markup;
use \WPML\Core\Twig\Sandbox\SecurityError;
use \WPML\Core\Twig\Sandbox\SecurityNotAllowedTagError;
use \WPML\Core\Twig\Sandbox\SecurityNotAllowedFilterError;
use \WPML\Core\Twig\Sandbox\SecurityNotAllowedFunctionError;
use \WPML\Core\Twig\Source;
use \WPML\Core\Twig\Template;

/* nav-menus-full.twig */
class __TwigTemplate_c076a3b4649526d7204a548937f7ad9fb4fdd74b87c645a2383e14ac7381b1bc extends \WPML\Core\Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 1
        echo "<nav class=\"wcml-tabs wpml-tabs\">
    <a class=\"nav-tab ";
        // line 2
        echo \WPML\Core\twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["menu"] ?? null), "translations", []), "active", []), "html", null, true);
        echo "\" href=\"";
        echo \WPML\Core\twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["menu"] ?? null), "translations", []), "url", []), "html", null, true);
        echo "\">";
        echo \WPML\Core\twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["menu"] ?? null), "translations", []), "title", []), "html", null, true);
        echo "</a>

    ";
        // line 4
        if (($context["can_manage_options"] ?? null)) {
            // line 5
            echo "        <a class=\"nav-tab ";
            echo \WPML\Core\twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["menu"] ?? null), "settings", []), "active", []), "html", null, true);
            echo "\" href=\"";
            echo \WPML\Core\twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["menu"] ?? null), "settings", []), "url", []), "html", null, true);
            echo "\">";
            echo \WPML\Core\twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["menu"] ?? null), "settings", []), "name", []), "html", null, true);
            echo "</a>
    ";
        }
        // line 7
        echo "    ";
        if (($context["can_operate_options"] ?? null)) {
            // line 8
            echo "        <a class=\"nav-tab ";
            echo \WPML\Core\twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["menu"] ?? null), "slugs", []), "active", []), "html", null, true);
            echo "\" href=\"";
            echo \WPML\Core\twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["menu"] ?? null), "slugs", []), "url", []), "html", null, true);
            echo "\">";
            echo \WPML\Core\twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["menu"] ?? null), "slugs", []), "name", []), "html", null, true);
            echo "</a>
    ";
        }
        // line 10
        echo "    ";
        if (($context["can_manage_options"] ?? null)) {
            // line 11
            echo "        <a class=\"nav-tab ";
            echo \WPML\Core\twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["menu"] ?? null), "status", []), "active", []), "html", null, true);
            echo "\" href=\"";
            echo \WPML\Core\twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["menu"] ?? null), "status", []), "url", []), "html", null, true);
            echo "\">";
            echo \WPML\Core\twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["menu"] ?? null), "status", []), "name", []), "html", null, true);
            echo "</a>
        ";
            // line 12
            if ($this->getAttribute($this->getAttribute(($context["menu"] ?? null), "troubleshooting", []), "active", [])) {
                // line 13
                echo "            <a class=\"nav-tab troubleshooting ";
                echo \WPML\Core\twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["menu"] ?? null), "troubleshooting", []), "active", []), "html", null, true);
                echo "\" href=\"";
                echo \WPML\Core\twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["menu"] ?? null), "troubleshooting", []), "url", []), "html", null, true);
                echo "\">";
                echo \WPML\Core\twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["menu"] ?? null), "troubleshooting", []), "name", []), "html", null, true);
                echo "</a>
        ";
            }
            // line 15
            echo "    ";
        }
        // line 16
        echo "    ";
        if (($context["can_operate_options"] ?? null)) {
            // line 17
            echo "        <a class=\"nav-tab ";
            echo \WPML\Core\twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["menu"] ?? null), "multi_currency", []), "active", []), "html", null, true);
            echo "\" href=\"";
            echo \WPML\Core\twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["menu"] ?? null), "multi_currency", []), "url", []), "html", null, true);
            echo "\">";
            echo \WPML\Core\twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["menu"] ?? null), "multi_currency", []), "name", []), "html", null, true);
            echo "</a>
    ";
        }
        // line 19
        echo "</nav>
";
    }

    public function getTemplateName()
    {
        return "nav-menus-full.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  109 => 19,  99 => 17,  96 => 16,  93 => 15,  83 => 13,  81 => 12,  72 => 11,  69 => 10,  59 => 8,  56 => 7,  46 => 5,  44 => 4,  35 => 2,  32 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("<nav class=\"wcml-tabs wpml-tabs\">
    <a class=\"nav-tab {{ menu.translations.active }}\" href=\"{{ menu.translations.url }}\">{{ menu.translations.title }}</a>

    {% if can_manage_options %}
        <a class=\"nav-tab {{ menu.settings.active }}\" href=\"{{ menu.settings.url }}\">{{ menu.settings.name }}</a>
    {% endif %}
    {%  if can_operate_options %}
        <a class=\"nav-tab {{ menu.slugs.active }}\" href=\"{{ menu.slugs.url }}\">{{ menu.slugs.name }}</a>
    {% endif %}
    {% if can_manage_options %}
        <a class=\"nav-tab {{ menu.status.active }}\" href=\"{{ menu.status.url }}\">{{ menu.status.name }}</a>
        {% if menu.troubleshooting.active %}
            <a class=\"nav-tab troubleshooting {{ menu.troubleshooting.active }}\" href=\"{{ menu.troubleshooting.url }}\">{{ menu.troubleshooting.name }}</a>
        {% endif %}
    {% endif %}
    {%  if can_operate_options %}
        <a class=\"nav-tab {{ menu.multi_currency.active }}\" href=\"{{ menu.multi_currency.url }}\">{{ menu.multi_currency.name }}</a>
    {% endif %}
</nav>
", "nav-menus-full.twig", "C:\\xampp\\htdocs\\junior-salon\\wp-content\\plugins\\woocommerce-multilingual\\templates\\nav-menus-full.twig");
    }
}
