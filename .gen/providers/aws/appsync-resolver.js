"use strict";
// https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.AppsyncResolver = void 0;
var cdktf = require("cdktf");
function appsyncResolverCachingConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        caching_keys: cdktf.listMapper(cdktf.stringToTerraform)(struct.cachingKeys),
        ttl: cdktf.numberToTerraform(struct.ttl)
    };
}
function appsyncResolverPipelineConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        functions: cdktf.listMapper(cdktf.stringToTerraform)(struct.functions)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html aws_appsync_resolver}
*/
var AppsyncResolver = /** @class */ (function (_super) {
    __extends(AppsyncResolver, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html aws_appsync_resolver} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppsyncResolverConfig
    */
    function AppsyncResolver(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_appsync_resolver',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._apiId = config.apiId;
        _this._dataSource = config.dataSource;
        _this._field = config.field;
        _this._kind = config.kind;
        _this._requestTemplate = config.requestTemplate;
        _this._responseTemplate = config.responseTemplate;
        _this._type = config.type;
        _this._cachingConfig = config.cachingConfig;
        _this._pipelineConfig = config.pipelineConfig;
        return _this;
    }
    Object.defineProperty(AppsyncResolver.prototype, "apiId", {
        get: function () {
            return this.getStringAttribute('api_id');
        },
        set: function (value) {
            this._apiId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncResolver.prototype, "apiIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._apiId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncResolver.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncResolver.prototype, "dataSource", {
        get: function () {
            return this.getStringAttribute('data_source');
        },
        set: function (value) {
            this._dataSource = value;
        },
        enumerable: false,
        configurable: true
    });
    AppsyncResolver.prototype.resetDataSource = function () {
        this._dataSource = undefined;
    };
    Object.defineProperty(AppsyncResolver.prototype, "dataSourceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dataSource;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncResolver.prototype, "field", {
        get: function () {
            return this.getStringAttribute('field');
        },
        set: function (value) {
            this._field = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncResolver.prototype, "fieldInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._field;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncResolver.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncResolver.prototype, "kind", {
        get: function () {
            return this.getStringAttribute('kind');
        },
        set: function (value) {
            this._kind = value;
        },
        enumerable: false,
        configurable: true
    });
    AppsyncResolver.prototype.resetKind = function () {
        this._kind = undefined;
    };
    Object.defineProperty(AppsyncResolver.prototype, "kindInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kind;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncResolver.prototype, "requestTemplate", {
        get: function () {
            return this.getStringAttribute('request_template');
        },
        set: function (value) {
            this._requestTemplate = value;
        },
        enumerable: false,
        configurable: true
    });
    AppsyncResolver.prototype.resetRequestTemplate = function () {
        this._requestTemplate = undefined;
    };
    Object.defineProperty(AppsyncResolver.prototype, "requestTemplateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requestTemplate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncResolver.prototype, "responseTemplate", {
        get: function () {
            return this.getStringAttribute('response_template');
        },
        set: function (value) {
            this._responseTemplate = value;
        },
        enumerable: false,
        configurable: true
    });
    AppsyncResolver.prototype.resetResponseTemplate = function () {
        this._responseTemplate = undefined;
    };
    Object.defineProperty(AppsyncResolver.prototype, "responseTemplateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._responseTemplate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncResolver.prototype, "type", {
        get: function () {
            return this.getStringAttribute('type');
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncResolver.prototype, "typeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncResolver.prototype, "cachingConfig", {
        get: function () {
            return this.interpolationForAttribute('caching_config');
        },
        set: function (value) {
            this._cachingConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    AppsyncResolver.prototype.resetCachingConfig = function () {
        this._cachingConfig = undefined;
    };
    Object.defineProperty(AppsyncResolver.prototype, "cachingConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cachingConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncResolver.prototype, "pipelineConfig", {
        get: function () {
            return this.interpolationForAttribute('pipeline_config');
        },
        set: function (value) {
            this._pipelineConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    AppsyncResolver.prototype.resetPipelineConfig = function () {
        this._pipelineConfig = undefined;
    };
    Object.defineProperty(AppsyncResolver.prototype, "pipelineConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._pipelineConfig;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AppsyncResolver.prototype.synthesizeAttributes = function () {
        return {
            api_id: cdktf.stringToTerraform(this._apiId),
            data_source: cdktf.stringToTerraform(this._dataSource),
            field: cdktf.stringToTerraform(this._field),
            kind: cdktf.stringToTerraform(this._kind),
            request_template: cdktf.stringToTerraform(this._requestTemplate),
            response_template: cdktf.stringToTerraform(this._responseTemplate),
            type: cdktf.stringToTerraform(this._type),
            caching_config: cdktf.listMapper(appsyncResolverCachingConfigToTerraform)(this._cachingConfig),
            pipeline_config: cdktf.listMapper(appsyncResolverPipelineConfigToTerraform)(this._pipelineConfig)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AppsyncResolver.tfResourceType = "aws_appsync_resolver";
    return AppsyncResolver;
}(cdktf.TerraformResource));
exports.AppsyncResolver = AppsyncResolver;
